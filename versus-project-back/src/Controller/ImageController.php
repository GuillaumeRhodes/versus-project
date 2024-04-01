<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Image;

class ImageController extends AbstractController
{
#[Route('/api/images/{id}/vote', name: 'app_image', methods: ['POST'])]
    public function vote(EntityManagerInterface $entityManager, $id)
    {
        // get image from database
        $image = $entityManager->getRepository(Image::class)->find($id);

        // verify if image exists
        if (!$image) {
            return new JsonResponse(['error' => 'Image not found'], 404);
        }

        // increment vote count
        $image->setVoteCount($image->getVoteCount() + 1);

        // save to database
        $entityManager->flush();

        // send response success
        return new JsonResponse(['success' => true]);
    }

    #[Route('/api/images/{id}/vote-percentages', name: 'app_image_vote_percentages')]
    public function getVotePercentages(EntityManagerInterface $entityManager, $id)
    {
        // get image from database
        $image1 = $entityManager->getRepository(Image::class)->find($id);

        // verify if image exists
        if (!$image1) {
            return $this->json(['error' => 'Image not found'], 404);
        }

        // get next image from database
        $image2 = $entityManager->getRepository(Image::class)->find($id + 1);

        // verify if next image exists
        if (!$image2) {
            return $this->json(['error' => 'Next image not found'], 404);
        }

        // calcul total votes
        $totalVotes = $image1->getVoteCount() + $image2->getVoteCount();

        // calcul percentage of votes
        $percentage1 = $totalVotes > 0 ? ($image1->getVoteCount() / $totalVotes) * 100 : 0;
        $percentage2 = $totalVotes > 0 ? ($image2->getVoteCount() / $totalVotes) * 100 : 0;

        // build response
        $data = [
            'image1_id' => $image1->getId(),
            'image1_url' => $image1->getUrl(),
            'image1_percentage' => $percentage1,
            'image2_id' => $image2->getId(),
            'image2_url' => $image2->getUrl(),
            'image2_percentage' => $percentage2,
        ];

        return $this->json($data);
    }
}

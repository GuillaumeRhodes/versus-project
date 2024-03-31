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
        // Récupérer l'image depuis la base de données
        $image = $entityManager->getRepository(Image::class)->find($id);

        // Vérifier si l'image existe
        if (!$image) {
            return new JsonResponse(['error' => 'Image not found'], 404);
        }

        // Incrémenter le voteCount
        $image->setVoteCount($image->getVoteCount() + 1);

        // Sauvegarder les modifications en base de données
        $entityManager->flush();

        // Répondre avec succès
        return new JsonResponse(['success' => true]);
    }

    #[Route('/api/images/vote-percentages', name: 'app_image_vote_percentages')]
    public function getVotePercentages(EntityManagerInterface $entityManager)
    {
        $images = $entityManager->getRepository(Image::class)->findAll();
        $totalVotes = array_sum(array_map(fn($image) => $image->getVoteCount(), $images));

        $data = [];
        foreach ($images as $image) {
            $data[] = [
                'id' => $image->getId(),
                'url' => $image->getUrl(),
                'percentage' => $totalVotes > 0 ? ($image->getVoteCount() / $totalVotes) * 100 : 0
            ];
        }

        return $this->json($data);
    }
}

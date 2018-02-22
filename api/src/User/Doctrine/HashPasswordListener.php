<?php

namespace App\User\Doctrine;

use App\User\Entity\User;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class HashPasswordListener implements EventSubscriber
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();
        if ($entity instanceof User === false) {
            return;
        }

        $encoded = $this->passwordEncoder->encodePassword($entity, $entity->getPassword());
        $entity->setPassword($encoded);
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();
        if ($entity instanceof User === false) {
            return;
        }

        $this->encodePassword($entity);
        $em = $args->getEntityManager();
        $meta = $em->getClassMetaData(get_class($entity));
        $em->getUnitOfWork()->recomputeSingleEntityChangeSet($meta, $entity);
    }

    public function getSubscribedEvents()
    {
        return ['prePersist', 'preUpdate', ];
    }

    /**
     * @param $entity
     */
    protected function encodePassword(User $entity)
    {
        if ($entity->getPlainPassword() === null) {
            return;
        }
        $encoded = $this->passwordEncoder->encodePassword($entity, $entity->getPlainPassword());
        $entity->setPassword($encoded);
    }
}

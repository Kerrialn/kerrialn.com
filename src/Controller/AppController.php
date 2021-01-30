<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{

    /**
     * @Route("/", name="blog")
     */
    public function blog(): Response
    {
        return $this->render('app/index.html.twig');
    }

    /**
     * @Route("/blog/2020/perspective", name="blog.2020.perspective")
     */
    public function blog2020Perspective(): Response
    {
        return $this->render('blog/2020/perspective/index.html.twig');
    }


    /**
     * @Route("/blog/2020/a-hunch", name="blog.2020.a-hunch")
     */
    public function blog2020AHunch(): Response
    {
        return $this->render('blog/2020/a-hunch/index.html.twig');
    }

    /**
     * @Route("/blog/2020/easy-cheap-good-working-free-and-now", name="blog.2020.easy-cheap-good-working-free-and-now")
     */
    public function blog2020EasyCheapGoodWorkingFreeAndNow(): Response
    {
        return $this->render('blog/2020/easy-cheap-good-working-free-and-now/index.html.twig');
    }


}

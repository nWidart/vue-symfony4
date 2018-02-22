<?php

namespace App\Blog\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class CategoryController
{
    /**
     * @Route("/api/blog/category", name="blog.categories.index")
     */
    public function index()
    {
        var_dump('ad');exit;
    }
}

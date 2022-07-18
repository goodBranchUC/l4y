<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function about()
    {
        return view('about');
    }

    public function services()
    {
        return view('services');
    }

    public function projects()
    {
        return view('projects');
    }

    // public function projects($id)
    // {
    //     return view('projects{id}');
    // }

    public function testimonials()
    {
        return view('testimonials');
    }

    // public function testimonials($id)
}

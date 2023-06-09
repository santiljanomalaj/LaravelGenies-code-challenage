<?php

namespace App\Http\Controllers;

use App\Models\Developer;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    public function index()
    {
        $developers = Developer::all();

        return response()->json($developers);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:developers,email',
        ]);

        $developer = Developer::create($validatedData);

        return response()->json($developer, 201);
    }

    public function update(Request $request, Developer $developer)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:developers,email,' . $developer->id,
        ]);

        $developer->update($validatedData);

        return response()->json($developer);
    }

    public function destroy(Developer $developer)
    {
        $developer->delete();

        return response()->json(null, 204);
    }
}
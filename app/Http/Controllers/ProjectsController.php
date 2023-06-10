<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;
use Validator;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // @request: /api/projects
        // @method: get
        $data = Projects::all();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // @request: /api/projects
        // @method: post
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required'
        ]);
        if ($validator->fails()) {
            //validation failed
            return response()->json($validator->errors(), 422);
        }else{
            //validation success
            
            // save database
            $projects = new Projects();
            $projects->title = $request->input('title');
            $projects->description = $request->input('description');
            $projects->save();
            return response()->json("ok", 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Projects  $projects
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // @request: /api/projects/:id
        // @method: get
        
        // Retrieve the data for the specified projects model
        $projectData = Projects::find($id);
    
        // Return the data in the response
        return response()->json($projectData,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Projects  $projects
     * @return \Illuminate\Http\Response
     */
    public function edit(Projects $projects)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Projects  $projects
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // @request: /api/projects/:id
        // @method: patch
        // update project

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            //validation failed
            return response()->json($validator->errors(), 422);
        }else{
            //validation success
            $projects = Projects::find($id);
            // save database
            $projects->title = $request->input('title');
            $projects->description = $request->input('description');
            $projects->save();
            return response()->json("ok", 200);
        }

        return response()->json("ok",200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Projects  $projects
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // @request: /api/projects/:id
        // @method: patch
        // delete project
        $projects = Projects::find($id);
        $projects->delete();
        return response()->json("ok",200);
    }
}

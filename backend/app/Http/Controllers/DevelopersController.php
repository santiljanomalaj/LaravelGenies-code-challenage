<?php

namespace App\Http\Controllers;


use App\Models\Developers;
use Illuminate\Http\Request;
use Validator;

class DevelopersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // @request: /api/developers
        // @method: get
        $data = Developers::all();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // @request: /api/developers
        // @method: post
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:developers,email',
            'role' => 'required'
        ]);
        if ($validator->fails()) {
            //validation failed
            return response()->json($validator->errors(), 422);
        }else{
            //validation success
            
            // save database
            $developers = new Developers();
            $developers->name = $request->input('name');
            $developers->email = $request->input('email');
            $developers->role = $request->input('role');
            $developers->save();
            return response()->json("ok", 200);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Developers  $developers
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // @request: /api/developers/:id
        // @method: get
        
        // Retrieve the data for the specified developer model
        $developerData = Developers::find($id);
    
        // Return the data in the response
        return response()->json($developerData,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Developers  $developers
     * @return \Illuminate\Http\Response
     */
    public function edit(Developers $developers)
    {
        // var_dump()
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Developers  $developers
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // @request: /api/developers/:id
        // @method: patch
        // update developer

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'role' => 'required'
        ]);
        if ($validator->fails()) {
            //validation failed
            return response()->json($validator->errors(), 422);
        }else{
            //validation success
            $developers = Developers::find($id);
            // save database
            $developers->name = $request->input("name");
            $developers->email = $request->input("email");
            $developers->role = $request->input("role");
            $developers->save();
            return response()->json("ok", 200);
        }
 
        
        return response()->json("ok",200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Developers  $developers
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // @request: /api/developers/:id
        // @method: patch
        // delete developer
        $developers = Developers::find($id);
        $developers->delete();
        return response()->json("ok",200);
    }
}

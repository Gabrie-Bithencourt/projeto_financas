<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Attempting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    // 

    public function login(Request $request)
    {

        // 5|OMEVAnvyTe3qvMaR3pQRg9tyCrn2JMn6tAWF4W1Kecc02780

        if(Auth::attempt($request->only('email', 'password'))){

            // Criação de tokens //
            return response()->json([
                'token' => $request->user()->createToken('invoice')->plainTextToken
            ], 200);


        }

        return response()->json('Not Authorized', 403);
    }


    public function logout(Request $request)
    {

    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;

class SendFeedbackController extends Controller
{
    public function __invoke(Request $request)
    {
        try {

            Feedback::create([
                'name'     => $request->input('name'),
                'email'    => $request->input('email'),
                'feedback' => $request->input('feedback')
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Thanks for your feedback'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'error'   => true,
                'message' => $e->getMessage()
            ]);
        }
    }
}

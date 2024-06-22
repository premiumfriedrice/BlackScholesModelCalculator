import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */

export async function POST ({ request, cookies }) {
    const { St, K, r, t, o } = await request.json(); // Receive UI data

    const res = await fetch('http://0.0.0.0:18080/bspm', { // Fetch bspm value
        method: 'POST',
        body: JSON.stringify({
            St: St,
            K: K,
            r: r,
            t: t,
            o: o,
            call: true
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })

    const data = await res.json()  // Receive bspm value
    
    let resp = JSON.stringify({
        serverMessage: "hello from server load function",
       bspmValue: data
    })
     
 	return new Response(resp,{ // Return bspm value
            headers: {
                'Content-Type': 'applications/json',
            },
        });

}
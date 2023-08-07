import axios from 'axios'

export const POST = async (request) => {
	const data = await request.json();
	const _url = process.env.OPENAI;
	try {
	    const params = new URLSearchParams();
        params.append('uid', data.uid);
        params.append('domain', data.domain);

		const res = await axios.post(_url + '/history', params);
		
		return new Response(JSON.stringify(res.data), { status: 201 })

	} catch (error) {
		console.log('error',error)
		return new Response("An error occurred", { status: 500 });
	}

}
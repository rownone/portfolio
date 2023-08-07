import axios from 'axios'

export const POST = async (request) => {
	const data = await request.json();
	const _url = process.env.OPENAI;
	try {
		const params = new URLSearchParams();
		params.append('uid', data.uid);
		params.append('q', data.q);
		params.append('prev', data.prev);
		params.append('domain', data.domain);
		params.append('ref', data.ref);
		
		const res = await axios.post(_url + '/ask', params);
		
		return new Response(JSON.stringify(res.data), { status: 201 })

	} catch (error) {
		console.log('error',error)
		return new Response("An error occurred", { status: 500 });
	}
}
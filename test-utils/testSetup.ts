// Jest does not allow us to use dotenv, mongoose, or app.listen() in tests -- However, on Jest initialization, it's fine.
// So, we must run initialization code (dotenv, mongoose, app.listen()) here.  Then, for Jest supertests, we can simply import run_server.ts :)

// NODE_ENV must be set to production or development (or test, but this file shouldn't be ran with Jest)
// export async function beforeAll(() {
// 	console.log('beforeAll called!');
// });

export default async function () {
	return true;
}

// https://mswjs.io/

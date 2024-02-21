import { PrismaClient } from "@prisma/client";

async function seed() {
	const client = new PrismaClient()

	await client.user.createMany({
		data:[{
			name: 'julian',
			id: 'e1565906-efd3-4b21-896c-ed0a7eccf0af'
		}]
	})
}

seed().then()
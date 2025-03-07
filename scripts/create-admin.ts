import { hash } from 'bcrypt';
import prisma from '@/lib/prisma';

async function main() {
    const password = await hash('admin123', 10)
    const admin = await prisma.user.create({
        data: {
            name: 'Admin',
            email: 'test@test.com',
            password,
            role: 'ADMIN'
        }
    })

    console.log('Admin created: ', admin)
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect())
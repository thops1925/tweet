import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const SideNav = () => {
    const session = useSession()
    const user = session.data?.user
    return (
        <nav className='sticky top-0 px-2 py-4'>
            <ul className='flex flex-col items-start gap-2 whitespace-nowrap'>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={`/profiles/${user?.id}`}>
                        Profile
                    </Link>
                </li>

                <button onClick={{}}>{user?.id === user?.id ? 'sign out' : 'sign in'}</button>
            </ul>
        </nav>
    )
}

export default SideNav
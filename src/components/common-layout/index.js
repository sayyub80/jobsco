import { currentUser } from '@clerk/nextjs/server'
import Header from "../header"

async function CommonLayout({children}) {
  const user = await currentUser()
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
       {/*header */}
       <Header user={JSON.parse(JSON.stringify(user))}/>
       {/*header */}

       {/*main content*/}
       <main>{children}</main>
       {/*main content */}

    </div>
  )
}

export default CommonLayout





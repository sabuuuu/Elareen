import { CardContent, CardHeader, CardTitle } from "../ui/card"

function ProfileCard() {
  return (
    <div className="w-full bg-[#1B430F] rounded-3xl p-3 shadow-xl relative overflow-hidden transition-all duration-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-bold text-gray-100 ">Hello, Wassup dude 👋</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-md text-gray-200">Welcome back dude</p>
        </CardContent>
    </div>
  )
}

export default ProfileCard
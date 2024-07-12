import { Button } from "@/components/ui/button"

const myName = () => {
  return (
    <main className="h-full items-center flex justify-center flex-col">

        <div>myName</div>
        <button className="px-4 py-2 bg-blue-500 rounded my-3 hover:bg-blue-700">Test Button</button>
        <Button>Shadcn button</Button>
        <Button variant='nameButton'>Name Button</Button>
    </main>
  )
}

export default myName
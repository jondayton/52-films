import Link from "next/link";

export default function TestPage(): JSX.Element {
  return (
    <div>
      <Link href='/test/fetch'>Fetching</Link>
      <Link href='test/input'>Form Inputs</Link>
    </div>
  )
}
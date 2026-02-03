import Image from 'next/image'

export function HelloWorld() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image
        src="/benchcms.png"
        alt="BenchCMS"
        width={400}
        height={400}
        className="rounded-lg shadow-lg"
      />
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Next.js 16 Template</h2>
        <p className="mt-2 text-gray-600">Ready for deployment</p>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Button, Group } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { Layout } from '../components/Layout'
import { Headphones, ThreeDCubeSphere } from 'tabler-icons-react'

const ButtonDemo = () => {
  return (
    <Layout title="Button">
      <Group direction="column" position="center">
        <Button
          classNames={{
            leftIcon: 'text-pink-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="cyan"
          radius="lg"
          uppercase
          leftIcon={<Headphones />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Press
        </Button>
        <Button className="mt-4">Click</Button>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  )
}

export default ButtonDemo

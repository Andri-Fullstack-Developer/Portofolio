import { useRouter } from 'next/router'
import React, {useEffect} from 'react'

const Index = () => {
  const router = useRouter();

  useEffect(()=>{
    router.push('./Loading')
  })


}

export default Index
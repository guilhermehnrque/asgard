export default function Home() {
  return null 
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/gateway',
      permanent: false
    }
  }
  
}
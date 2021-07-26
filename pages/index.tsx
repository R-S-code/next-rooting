import * as style from "../styles/index.module.css"
import Link from 'next/link'

const Index = ()=> {
  return(
    <div>
      <h1 className={style.titleColor}>Index!</h1>
      <Link href="/test">
        <a>go to test</a>
      </Link>
    </div>
  )
}

export default Index
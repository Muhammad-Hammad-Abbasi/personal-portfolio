import About from "./about/page"
import Blog from "./blog/page"
import Card from "./card/card"
import Contact from "./contact/page"
import Style from "./style/style"

export default function Page() {
  return (
    <div>
     
     <Style/>
     <Blog/>
       <About/>
       <Contact/>
    </div>
  )
}

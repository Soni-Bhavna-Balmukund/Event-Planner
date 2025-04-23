import { menu } from "./menu"

const Footer = () => {
    // menu
    return(
        <>
        <div>footer</div>
            {/* <div>
                <ul>
                {
                    menu.map((v,i)=>( 
                        <div key={i}>      
                            <li>{v.title}
                               <p> {
                               v.children.map((c,ci)=>(
                                <li>{c}</li>
                               ))
                               }</p>
                               </li>
                        </div>
                                
                           
                    ))
                }
                </ul>
            </div> */}
        </>
    )
}
export default Footer
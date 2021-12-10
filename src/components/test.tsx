/**
 * Example tsx component with typed props 
 */
interface AppProps  {
  message: string
}; 


export const Test: React.FC<AppProps> = ({children, message}) => {

return ( 
  <div>
    <h1>{children}</h1>
    <p>{message}</p>
  </div>
)
}
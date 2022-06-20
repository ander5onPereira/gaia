// import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import {RiArrowRightLine,RiArrowLeftLine,RiAddFill, RiStarFill } from 'react-icons/ri';
// import { Input } from "../../components/Input";


// interface FormProps {
//   name: string,
//     disabled: boolean,
//     label: string,
//     type:"button" |"checkbox"|"color"|"date"|"datetime-local"|"email"|"file"|"hidden"|"image"|"month"|"number"|"password"|"radio"|"range"|"reset"|"search"|"submit"|"tel"|"text"|"time"|"url"|"week",
//     required: boolean,
// }
// const FORM_INPUT = [
//   {
//     name: "name",
//     disabled: false,
//     label: 'Nome',
//     type: 'text',
//     required: true,
//   },
//   {
//     name: "firstName",
//     disabled: false,
//     label: 'Sobrenome',
//     type: 'text',
//     required: false,
//   }
// ] as FormProps[];

export function PageButton() {
  // const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
  // const onSubmit = (data: any) => {
  //   console.log(data);
  // }
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='secondary' onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='error' onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='warning' onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='info' onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='success' onClick={() => console.log("CLICK")} text="buttons" />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="left-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='secondary' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='error' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='warning' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='info' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='success' mode="left-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="rigth-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='secondary' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='error' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='warning' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='info' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='success' mode="rigth-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="fab-extended" onClick={() => console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='secondary' mode="fab-extended" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='error' mode="fab-extended" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='warning' mode="fab-extended" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='info' mode="fab-extended" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='success' mode="fab-extended" onClick={() => console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="fab-round" onClick={() => console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='secondary' mode="fab-round" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='error' mode="fab-round" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='warning' mode="fab-round" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='info' mode="fab-round" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='success' mode="fab-round" onClick={() => console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="icon-button" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' mode="icon-button" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' mode="icon-button" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' mode="icon-button" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' mode="icon-button" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' mode="icon-button" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>

      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" disabled onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='secondary' disabled onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='error' disabled onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='warning' disabled onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='info' disabled onClick={()=>console.log("CLICK")} text="buttons" />
        <Button color='success' disabled onClick={() => console.log("CLICK")} text="buttons" />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="left-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='secondary' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='error' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='warning' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='info' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
        <Button color='success' mode="left-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiArrowLeftLine/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="rigth-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='secondary' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='error' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='warning' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='info' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
        <Button color='success' mode="rigth-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiArrowRightLine/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="fab-extended" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='secondary' mode="fab-extended" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='error' mode="fab-extended" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='warning' mode="fab-extended" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='info' mode="fab-extended" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='success' mode="fab-extended" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="fab-round" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='secondary' mode="fab-round" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='error' mode="fab-round" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='warning' mode="fab-round" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='info' mode="fab-round" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
        <Button color='success' mode="fab-round" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiAddFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" mode="icon-button" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' mode="icon-button" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' mode="icon-button" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' mode="icon-button" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' mode="icon-button" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' mode="icon-button" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>

      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='outlined' onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='outlined'  onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='outlined'  onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='outlined'  onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='outlined'  onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='outlined'  onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='outlined' mode="left-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='outlined' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='outlined' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='outlined' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='outlined' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='outlined' mode="left-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='outlined' mode="rigth-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='outlined' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='outlined' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='outlined' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='outlined' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='outlined' mode="rigth-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='outlined' mode="fab-extended" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='outlined' mode="fab-extended" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='outlined' mode="fab-extended" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='outlined' mode="fab-extended" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='outlined' mode="fab-extended" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='outlined' mode="fab-extended" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>

      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='outlined' disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='outlined'  disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='outlined'  disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='outlined'  disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='outlined'  disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='outlined'  disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='outlined' mode="left-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='outlined' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='outlined' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='outlined' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='outlined' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='outlined' mode="left-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='outlined' mode="rigth-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='outlined' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='outlined' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='outlined' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='outlined' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='outlined' mode="rigth-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='outlined' mode="fab-extended" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='outlined' mode="fab-extended" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='outlined' mode="fab-extended" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='outlined' mode="fab-extended" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='outlined' mode="fab-extended" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='outlined' mode="fab-extended" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>

      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='text' onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='text'  onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='text'  onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='text'  onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='text'  onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='text'  onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='text' mode="left-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='text' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='text' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='text' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='text' mode="left-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='text' mode="left-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='text' mode="rigth-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='text' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='text' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='text' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='text' mode="rigth-icon" onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='text' mode="rigth-icon" onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      
      <div style={{ border: "1px solid #000", width: '100vw', height: '10vh', display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        <Button color="primary" variant='text' disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='text'  disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='text'  disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='text'  disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='text'  disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='text'  disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='text' mode="left-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='text' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='text' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='text' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='text' mode="left-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='text' mode="left-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>
      <div style={{border:"1px solid #000",width:'100vw',height:'10vh',display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <Button color="primary" variant='text' mode="rigth-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='secondary' variant='text' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='error' variant='text' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='warning' variant='text' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='info' variant='text' mode="rigth-icon" disabled onClick={()=>console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
        <Button color='success' variant='text' mode="rigth-icon" disabled onClick={() => console.log("CLICK")} text="buttons" icon={<RiStarFill/>} />
      </div>

    </div>
  )
}

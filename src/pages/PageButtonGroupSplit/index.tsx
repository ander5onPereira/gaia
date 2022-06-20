import { Button } from '../../components/Button';
import {
  RiArrowRightLine,
  RiArrowLeftLine,
  RiAddFill,
  RiStarFill,
} from 'react-icons/ri';
import { ButtonGroupSplit } from '../../components/ButtonGroupSplit';

const btn = {
    onclick: () => console.log('1'),
    name: 'Buttom',
  };
export function PageButtonGroupSplit() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #000',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100vw',
            overflowY: 'auto',
            paddingBottom: '1rem',
          }}
        >
          <ButtonGroupSplit button={btn} variant="default" size="small" color="primary" />
          <ButtonGroupSplit button={btn} variant="default" size="small" color="secondary" />
          <ButtonGroupSplit button={btn} variant="default" size="small" color="error" />
          <ButtonGroupSplit button={btn} variant="default" size="small" color="warning" />
          <ButtonGroupSplit button={btn} variant="default" size="small" color="info" />
          <ButtonGroupSplit button={btn} variant="default" size="small" color="success" />
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100vw',
            overflowY: 'auto',
            paddingBottom: '1rem',
          }}
        >
          <ButtonGroupSplit button={btn} variant="default" size="medium" color="primary" />
          <ButtonGroupSplit button={btn} variant="default" size="medium" color="secondary" />
          <ButtonGroupSplit button={btn} variant="default" size="medium" color="error" />
          <ButtonGroupSplit button={btn} variant="default" size="medium" color="warning" />
          <ButtonGroupSplit button={btn} variant="default" size="medium" color="info" />
          <ButtonGroupSplit button={btn} variant="default" size="medium" color="success" />
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100vw',
            overflowY: 'auto',
            paddingBottom: '1rem',
          }}
        >
          <ButtonGroupSplit button={btn} variant="default" size="large" color="primary" />
          <ButtonGroupSplit button={btn} variant="default" size="large" color="secondary" />
          <ButtonGroupSplit button={btn} variant="default" size="large" color="error" />
          <ButtonGroupSplit button={btn} variant="default" size="large" color="warning" />
          <ButtonGroupSplit button={btn} variant="default" size="large" color="info" />
          <ButtonGroupSplit button={btn} variant="default" size="large" color="success" /> 
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #000',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100vw',
            overflowY: 'auto',
            paddingBottom: '1rem',
          }}
        >
           
          <ButtonGroupSplit button={btn} variant="outlined" size="small" color="primary"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="small" color="secondary"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="small" color="error"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="small" color="warning"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="small" color="info"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="small" color="success"/> 
          
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100vw',
            overflowY: 'auto',
            paddingBottom: '1rem',
          }}
        >
          
          <ButtonGroupSplit button={btn} variant="outlined" size="medium" color="primary"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="medium" color="secondary"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="medium" color="error"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="medium" color="warning"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="medium" color="info"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="medium" color="success"/> 
          
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100vw',
            overflowY: 'auto',
            paddingBottom: '1rem',
          }}
        >
          
          <ButtonGroupSplit button={btn} variant="outlined" size="large" color="primary"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="large" color="secondary"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="large" color="error"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="large" color="warning"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="large" color="info"/>
          <ButtonGroupSplit button={btn} variant="outlined" size="large" color="success"/> 
          
        </div>
      </div>
    </>
  );
}

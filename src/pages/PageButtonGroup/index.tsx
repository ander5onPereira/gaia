import { Button } from '../../components/Button';
import {
  RiArrowRightLine,
  RiArrowLeftLine,
  RiAddFill,
  RiStarFill,
} from 'react-icons/ri';
import { ButtonGroup } from '../../components/ButtonGroup';

const options = [
  {
    onclick: () => console.log('1'),
    name: 'Medium 1',
  },
  {
    onclick: () => console.log('2'),
    name: 'Medium 2',
  },
  {
    onclick: () => console.log('3'),
    name: 'Medium 3',
  },
];
export function PageButtonGroup() {
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
          <ButtonGroup options={options} size="small" color="primary" />
          <ButtonGroup options={options} size="small" color="secondary" />
          <ButtonGroup options={options} size="small" color="error" />
          <ButtonGroup options={options} size="small" color="warning" />
          <ButtonGroup options={options} size="small" color="info" />
          <ButtonGroup options={options} size="small" color="success" />
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
          <ButtonGroup options={options} size="medium" color="primary" />
          <ButtonGroup options={options} size="medium" color="secondary" />
          <ButtonGroup options={options} size="medium" color="error" />
          <ButtonGroup options={options} size="medium" color="warning" />
          <ButtonGroup options={options} size="medium" color="info" />
          <ButtonGroup options={options} size="medium" color="success" />
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
          <ButtonGroup options={options} size="large" color="primary" />
          <ButtonGroup options={options} size="large" color="secondary" />
          <ButtonGroup options={options} size="large" color="error" />
          <ButtonGroup options={options} size="large" color="warning" />
          <ButtonGroup options={options} size="large" color="info" />
          <ButtonGroup options={options} size="large" color="success" />
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
          <ButtonGroup options={options} variant="outlined" size="small" color="primary"/>
          <ButtonGroup options={options} variant="outlined" size="small" color="secondary"/>
          <ButtonGroup options={options} variant="outlined" size="small" color="error"/>
          <ButtonGroup options={options} variant="outlined" size="small" color="warning"/>
          <ButtonGroup options={options} variant="outlined" size="small" color="info"/>
          <ButtonGroup options={options} variant="outlined" size="small" color="success"/>
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
          <ButtonGroup options={options} variant="outlined" size="medium" color="primary"/>
          <ButtonGroup options={options} variant="outlined" size="medium" color="secondary"/>
          <ButtonGroup options={options} variant="outlined" size="medium" color="error"/>
          <ButtonGroup options={options} variant="outlined" size="medium" color="warning"/>
          <ButtonGroup options={options} variant="outlined" size="medium" color="info"/>
          <ButtonGroup options={options} variant="outlined" size="medium" color="success"/>
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
          <ButtonGroup options={options} variant="outlined" size="large" color="primary"/>
          <ButtonGroup options={options} variant="outlined" size="large" color="secondary"/>
          <ButtonGroup options={options} variant="outlined" size="large" color="error"/>
          <ButtonGroup options={options} variant="outlined" size="large" color="warning"/>
          <ButtonGroup options={options} variant="outlined" size="large" color="info"/>
          <ButtonGroup options={options} variant="outlined" size="large" color="success"/>
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
        <ButtonGroup options={options} variant="text" size="small" color="primary"/>
        <ButtonGroup options={options} variant="text" size="small" color="secondary"/>
        <ButtonGroup options={options} variant="text" size="small" color="error"/>
        <ButtonGroup options={options} variant="text" size="small" color="warning"/>
        <ButtonGroup options={options} variant="text" size="small" color="info"/>
        <ButtonGroup options={options} variant="text" size="small" color="success"/>
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
        <ButtonGroup options={options} variant="text" size="medium" color="primary"/>
        <ButtonGroup options={options} variant="text" size="medium" color="secondary"/>
        <ButtonGroup options={options} variant="text" size="medium" color="error"/>
        <ButtonGroup options={options} variant="text" size="medium" color="warning"/>
        <ButtonGroup options={options} variant="text" size="medium" color="info"/>
        <ButtonGroup options={options} variant="text" size="medium" color="success"/>
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
        <ButtonGroup options={options} variant="text" size="large" color="primary"/>
        <ButtonGroup options={options} variant="text" size="large" color="secondary"/>
        <ButtonGroup options={options} variant="text" size="large" color="error"/>
        <ButtonGroup options={options} variant="text" size="large" color="warning"/>
        <ButtonGroup options={options} variant="text" size="large" color="info"/>
        <ButtonGroup options={options} variant="text" size="large" color="success"/>
          </div>
      </div>
    </>
  );
}

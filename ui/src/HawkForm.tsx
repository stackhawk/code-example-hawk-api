import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Hawk } from './services/hawk';
import { fetchHawk } from './services/hawk.service';

interface Props {
  id?: number;
  onSave: (hawkInfo: Omit<Hawk, 'id'>) => void;
}

const DEFAULT_HAWK = {
  name: '',
  size: 'SMALL',
  gender: 'MALE',
  lengthBegin: 0,
  lengthEnd: 0,
  wingspanBegin: 0,
  wingspanEnd: 0,
  weightBegin: 0,
  weightEnd: 0,
  pictureUrl: '',
  habitatDescription: '',
  colorDescription: '',
  behaviorDescription: '',
} as Omit<Hawk, 'id'>;

const CreateHawk: React.FC<Props> = ({ id, onSave }) => {
  const [hawkInfo, setHawkInfo] = useState(DEFAULT_HAWK);

  useEffect(() => {
    if (!id) {
      setHawkInfo(DEFAULT_HAWK);
      return;
    }
    fetchHawk(id).then((hawkData) => {
      setHawkInfo(hawkData);
    });
  }, [id]);

  const updateProperty = (propertyName: keyof Hawk, value: string | number) => {
    setHawkInfo({ ...hawkInfo, [propertyName]: value });
  };

  return (
    <form className="padding-4 margin-top-0 flex-column">
      <h3>Hawk Information</h3>
      <TextField
        className="margin-bottom-4"
        required
        label="Name"
        variant="outlined"
        onChange={({ target: { value } }) => updateProperty('name', value)}
        value={hawkInfo.name}
      ></TextField>

      <FormControl required className="margin-bottom-4" variant="outlined">
        <InputLabel id="size">Size</InputLabel>
        <Select
          required
          labelId="size"
          value={hawkInfo.size}
          label="Size"
          onChange={({ target: { value } }) => updateProperty('size', value)}
        >
          <MenuItem value={'SMALL'}>Small</MenuItem>
          <MenuItem value={'MEDIUM'}>Medium</MenuItem>
          <MenuItem value={'LARGE'}>Large</MenuItem>
        </Select>
      </FormControl>

      <FormControl required className="margin-bottom-4" variant="outlined">
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          required
          labelId="gender"
          value={hawkInfo.gender}
          label="Gender"
          onChange={({ target: { value } }) => updateProperty('gender', value)}
        >
          <MenuItem value={'MALE'}>Male</MenuItem>
          <MenuItem value={'FEMALE'}>Female</MenuItem>
        </Select>
      </FormControl>

      <div className="flex-row margin-bottom-4">
        <TextField
          className="margin-right-2"
          required
          label="Length From"
          variant="outlined"
          type="number"
          onChange={({ target: { value } }) =>
            updateProperty('lengthBegin', value)
          }
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          value={hawkInfo.lengthBegin}
        ></TextField>
        <TextField
          required
          label="Length To"
          variant="outlined"
          type="number"
          onChange={({ target: { value } }) =>
            updateProperty('lengthEnd', value)
          }
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          value={hawkInfo.lengthEnd}
        ></TextField>
      </div>

      <div className="flex-row margin-bottom-4">
        <TextField
          className="margin-right-2"
          required
          label="Wingspan From"
          variant="outlined"
          type="number"
          onChange={({ target: { value } }) =>
            updateProperty('wingspanBegin', value)
          }
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          value={hawkInfo.wingspanBegin}
        ></TextField>
        <TextField
          required
          label="Wingspan To"
          variant="outlined"
          type="number"
          onChange={({ target: { value } }) =>
            updateProperty('wingspanEnd', value)
          }
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          value={hawkInfo.wingspanEnd}
        ></TextField>
      </div>

      <div className="flex-row margin-bottom-4">
        <TextField
          className="margin-right-2"
          required
          label="Weight From"
          variant="outlined"
          type="number"
          onChange={({ target: { value } }) =>
            updateProperty('weightBegin', value)
          }
          InputProps={{
            endAdornment: <InputAdornment position="end">grams</InputAdornment>,
          }}
          value={hawkInfo.weightBegin}
        ></TextField>
        <TextField
          required
          label="Weight To"
          variant="outlined"
          type="number"
          onChange={({ target: { value } }) =>
            updateProperty('weightEnd', value)
          }
          InputProps={{
            endAdornment: <InputAdornment position="end">grams</InputAdornment>,
          }}
          value={hawkInfo.weightEnd}
        ></TextField>
      </div>

      <TextField
        className="margin-bottom-4"
        required
        label="Image Url"
        variant="outlined"
        onChange={({ target: { value } }) =>
          updateProperty('pictureUrl', value)
        }
        value={hawkInfo.pictureUrl}
      ></TextField>

      <TextField
        className="margin-bottom-4"
        required
        label="Color Description"
        variant="outlined"
        multiline
        onChange={({ target: { value } }) =>
          updateProperty('colorDescription', value)
        }
        value={hawkInfo.colorDescription}
      ></TextField>

      <TextField
        className="margin-bottom-4"
        required
        label="Behavior Description"
        variant="outlined"
        multiline
        onChange={({ target: { value } }) =>
          updateProperty('behaviorDescription', value)
        }
        value={hawkInfo.behaviorDescription}
      ></TextField>

      <TextField
        className="margin-bottom-4"
        required
        label="Habitat Description"
        variant="outlined"
        multiline
        onChange={({ target: { value } }) =>
          updateProperty('habitatDescription', value)
        }
        value={hawkInfo.habitatDescription}
      ></TextField>

      <Button variant="contained" onClick={() => onSave(hawkInfo)}>
        Save
      </Button>
    </form>
  );
};

export default CreateHawk;

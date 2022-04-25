import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import './App.css';
import { createHawk, fetchHawks, updateHawk } from './services/hawk.service';
import { Hawk } from './services/hawk';
import HawkTable from './HawkTable';
import HawkForm from './HawkForm';

const App: React.FC = () => {
  const [hawks, setHawks] = useState<Hawk[]>([]);
  const [filterText, setFilterText] = useState<string>('');
  const [hawkToView, setHawkToView] = useState<number | null>(null);

  useEffect(() => {
    fetchHawks({ filter: filterText }).then(({ hawks: hawkResponse }) => {
      setHawks(hawkResponse);
    });
  }, [filterText]);

  const saveHawk = (hawkInfo: Omit<Hawk, 'id'>) => {
    if (hawkToView) {
      updateHawk(hawkToView, { ...hawkInfo, id: hawkToView }).then(
        (hawkResponse) => {
          const updatedHawks = hawks.map((hawk) => {
            if (hawk.id === hawkResponse.id) {
              return hawkResponse;
            }
            return hawk;
          });
          setHawks(updatedHawks);
          setHawkToView(null);
        }
      );
      return;
    }
    createHawk(hawkInfo).then((hawkResponse) => {
      setHawks([...hawks, hawkResponse]);
      setHawkToView(null);
    });
  };

  return (
    <main className="flex-row">
      <div
        className="padding-4 flex-column align-items-start"
        style={{ flex: '1' }}
      >
        <Button
          variant="contained"
          className="margin-bottom-4"
          onClick={() => {
            setHawkToView(0);
          }}
        >
          <AddIcon className="margin-right-2"></AddIcon>Add Hawk
        </Button>

        <TextField
          variant="outlined"
          label="Filter Hawks"
          className="margin-right-2"
          style={{ width: '40%' }}
          onChange={({ target: { value } }) => setFilterText(value)}
        ></TextField>

        <HawkTable
          hawks={hawks}
          onClick={(id) => setHawkToView(id)}
        ></HawkTable>
      </div>
      {hawkToView !== null && (
        <HawkForm id={hawkToView} onSave={saveHawk}></HawkForm>
      )}
    </main>
  );
};

export default App;

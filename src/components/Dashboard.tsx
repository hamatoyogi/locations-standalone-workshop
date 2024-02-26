import React from 'react';
import './Dashboard.css';
import { Location } from '../types';
import { Button, Page, Card, Table } from '@wix/design-system';
import { client, navigateToSettings } from '../dashboard-sdk';

const locations: Location[] = [
  {
    name: 'Tel Aviv',
    coord: {
      latitude: 32.0852997,
      longitude: 34.7818064,
    },
  },
  {
    name: "Be'er Sheva",
    coord: {
      latitude: 31.2457442,
      longitude: 34.7925181,
    },
  },
];

const columns = [
  {
    title: 'Name',
    render: (row: Location) => row.name,
  },
  {
    title: 'Coords',
    render: (row: Location) =>
      row.coord.latitude.toFixed(2) + ', ' + row.coord.longitude.toFixed(2),
  },
];

function Dashboard() {
  return (
    <Page height="100dvh">
      <Page.Header
        title="Our Locations"
        actionsBar={
          <Button
            onClick={() =>
              //   client.dashboard.showToast({ message: 'hello world!' })
              navigateToSettings()
            }
          >
            Update Locations
          </Button>
        }
      />
      <Page.Content>
        <Card>
          <Table skin="standard" columns={columns} data={locations}>
            <Table.Content />
          </Table>
        </Card>
      </Page.Content>
    </Page>
  );
}

export default Dashboard;

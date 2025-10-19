import type {ReactNode} from 'react';
import {Redirect} from 'react-router-dom';

export default function Home(): ReactNode {
  return <Redirect to="/" />;
}

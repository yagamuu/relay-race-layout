import { RiotComponentExport } from "riot";

export interface Props {}

export interface State {
  relayName: string;
  showEdit: boolean;
}

export interface RelayInfoComponent extends RiotComponentExport<Props, State> {
  state: State;
}

export interface EditProps {
  submitRelayInfoHandler: Function | null;
  closeRelayInfoHandler: Function | null;
}

export interface EditState {
  relayName: string;
}

export interface RelayInfoEditComponent
  extends RiotComponentExport<EditProps, EditState> {
  state: EditState;
}

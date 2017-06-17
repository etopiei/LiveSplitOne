import * as React from "react";
import * as LiveSplit from "../livesplit";

export interface Props { state: LiveSplit.CurrentPaceComponentStateJson };

export class Component extends React.Component<Props, undefined> {
	render() {
		return (
			<div className="current-pace">
				<table>
					<tbody>
						<tr>
							<td className="current-pace-text">{this.props.state.text}</td>
							<td className={"current-pace-time time"}>{this.props.state.time}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

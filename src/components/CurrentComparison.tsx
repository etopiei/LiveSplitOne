import * as React from "react";
import * as LiveSplit from "../livesplit";

export interface Props { state: LiveSplit.CurrentComparisonComponentStateJson };

export class Component extends React.Component<Props, undefined> {
	render() {
		return (
			<div className="current-comparison">
				<table>
					<tbody>
						<tr>
							<td className="current-comparison-text">{this.props.state.text}</td>
							<td className={"current-comparison-comparison"}>{this.props.state.comparison}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

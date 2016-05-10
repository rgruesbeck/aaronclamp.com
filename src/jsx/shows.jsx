var Show = React.createClass({
    render: function() {
        var date = new Date(this.props.start).format("ddd mmm dd @ h:MM TT");
        return (
          <div className="show">
            <div>
              <span className="show__date">{date}</span>
            </div>
            <div>
              <span className="show__time">{this.props.summary}</span>
            </div>
            <div>
              <span className="show__venu">{this.props.location}</span>
            </div>
          </div>
        );
    }
});

var Shows = React.createClass({
    getInitialState: function() {
      return {
        shows: []
      };
    },

    componentDidMount: function() {
      var calendarUrl = encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + this.props.calendarId + '/events?key=' + this.props.apiKey);
      this.serverRequest = $.get(calendarUrl, function (result) {
        this.setState({
          shows: result.items
        });
      }.bind(this));
    },

    componentWillUnmount: function() {
      this.serverRequest.abort();
    },

    render: function() {
        return (
          <ul id="shows" className="shows">
            {this.state.shows.map(function(show){
              return <li key={show.id}>
                <Show
                  start={show.start.dateTime}
                  location={show.location}
                  summary={show.summary}
                  description={show.description}
                />
              </li>;
            })}
          </ul>
        );
    }
});

ReactDOM.render(
    <Shows calendarId="aaronclamp.com_b7fo0kt1qs4t91n6glnt4teju0@group.calendar.google.com" apiKey="AIzaSyDZ4PygSkkKST37XP7haH-5JWXPDS3xhvk" />,
    document.getElementById('shows')
);
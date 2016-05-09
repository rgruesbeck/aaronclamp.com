var Show = React.createClass({
    render: function() {
        return (
          <div className="show">
            <div>
              <span className="show__date">May 27 2016</span>
              <span className="show__time">8pm</span>
            </div>
            <div>
              <span className="show__venu">Starry Plough</span>
              <span className="show__address">123 Fake St.</span>
              <span className="show__price">$10</span>
            </div>
          </div>
        );
    }
});

var Shows = React.createClass({
    render: function() {
        return (
          <ul id="shows" className="shows">
            <li>
              <Show />
              <Show />
            </li>
          </ul>
        );
    }
});

ReactDOM.render(
    <Shows source="https://www.googleapis.com/calendar/v3/calendars/milan.kacurak@gmail.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY"/>,
    document.getElementById('shows')
);

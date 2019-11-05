import {connect} from 'react-redux';//merge components to store
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);
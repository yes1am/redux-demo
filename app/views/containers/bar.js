import { connect } from 'react-redux'
import { Bar } from '../components'
import { addBar } from '../actions'

const mapStateToProps = state => ({
  count: state.bar.count
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(addBar(2))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar)

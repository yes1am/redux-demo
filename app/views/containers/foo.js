import { connect } from 'react-redux'
import { Foo } from '../components'
import { addFoo, addFooAsyncWithThunk } from '../actions'

const mapStateToProps = state => ({
  count: state.foo.count
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(addFoo(1)),
  onClickThunk: () => dispatch(addFooAsyncWithThunk(1))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Foo)

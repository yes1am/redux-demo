import { connect } from 'react-redux'
import { Foo } from '../components'
import { addFoo } from '../actions'

const mapStateToProps = state => ({
  count: state.foo.count
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(addFoo(1))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Foo)

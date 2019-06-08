
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, AppRegistry} from 'react-native';

function fun2(){
  console.log(this)
}

export default class App extends Component {

  constructor()  {
    super()      
    this.state = {}
    this.buttonPressed = this.buttonPressed.bind(this)
  }
  buttonPressed() {
    console.log(this.state.username, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.Image}
          source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDg0NDQ0NDQ8NDQ4OFhEWFhURFRYYHSggGB0lGxMWIzEiJisrLi4uFx8zRDMsNygvLisBCgoKDg0OGhAQGy8lICY1LSs4LS0tLS0vLS0rLy8tNy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIECAP/xABDEAACAgECAwUFAwcLBAMAAAABAgADBAURBhIhBxMiQVEUMWFxgTKRkhYjUnKhotEVU2JjgpOUsbLB0ghUVbMXJEL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/8QANREBAAIBAQYCCAUEAwEAAAAAAAECAxEEBRIhMZFRYQYTFUFxgaHhUrHB0fAUIjIzFiNiQv/aAAwDAQACEQMRAD8AvGAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBE7+MHR3T2dTyO6b98RvsSP0fhMe+9JraY4enn9mzTdUWrFuPr5fd8zxq3/bJ/fH/jOJ3vMR/jHf7O/Y8fj+n3S2p+ZVb3cwB+8TaidY1YkxpOjnPXhAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAg+h3VJm5l1zIlVaZNjvYQERRaCWJPQDbzmJsNeLar8vH825t8zXZafL8m2/KzQ/wDyOm/4ij+M3v6a34Pow/W/+vq7OJxVpV1iU06hhW22Hlrrryamdj6AA9YnFeI1mJeRaJ97czh6QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQIHr2hWY2m6zbZYjh9Mz12UHfmNRbz+Up7v2O2HaOOZ11/fVobZttc2KKRGmn7aK27Nuz3H1rFvyLsm+g05BoValrII7tH3PMD+nPoNo2mcVoiIYuPHFo1lPtA7I8TBzMfMTMyrHx7BYqOtQViARsdhv5yrk2y16zWYhLXFWJ1hYwlVKQMwEBAQEBAQEBAQEBAQEBAQEBAQEDEDMBAQI52jORoup8oZmfFtqCqCzEuOQAAfrSXB/sr8XluiuOzcXY+h5W4todtU6b89TFfZq/kdun7JX37fSsTWfDpPxXN0Ui2TS0a8p6t3jZGZa3JVbku2xPKt1hOw+s+bpfNedKzMz8Z/dv5Mez444rVrEfCHb9l1X0zf7yz+Mm9Vtf/rvP7ofW7F/57R+ySDVU03S/as9nUUozWc5LWsxchUG/vYkgD5zc2PHecdaz182FtdqettNOnko7iftO1bULGWm18LHZuWujFYradz05rB4ix9F2HXbabWPZqUjWebOtlmeUOv+SnEzJ7R7NqRG3NzHIPf7fqF+83+G2899bg105dvscOTqzw52i6vptoD325VKsVtxcxmsPQ7FQ7eOsjbb0HoYybPjvHLl8HkZbV5S9DcOa3RqWJTmY5JruXflbYOjg7MjD1BBEzMlJpaaytROsavMWXxHqXe27alqAHeWbAZ2SABzHYfamtXHTSOUKlslonqs7sS4xtusu03Mvsusbe/Fsvsayw7D85VzN1PQcw/tSpteGI/vqmxZNeUu/wBu+o5GNj6f7PkX47PddzGi6yksAg6EqRv75zsdYtadYe5bTEcnDsHzcnIq1GzJycjI5bMdEORfZdy7KxO3MTt7xG2ViJiIh5imZjWVe8Z9oWfqWRYasm7Hwg7CimixqeasHo9hXYsSOux6D9ptYdnrSOcayjvlnXSHHD4W4mNS5NNGohHAdWTJNdhU9QeTnD/sicuDXSdOxFcnVfvA9l76VgHJ772gY1a3+0c4v71Rytz83i33HnM3Lpxzp0WY6Ot2hcSDStNvyAR37jucVT53sDynbzCjdj8FM9w4/WXiHlrcMavOS8QarylhqOpFVKqze25OwZt+UE83Qnlb7jNb1dOmkKnHfquPsN4jty8bKxMm6y67GsW1HusayxqbB7uZiSdmVvxCZ+144raJj3rGK3FHNKe0mq5tGz2x7babqafaEsoseuwd0Q7AFSD1VWH1kOCY9ZGru3Tkprsv4mzf5awkyM3LupuaylkvyrrU3atuTozEb8wWX9oxV9XMxCvivM25rB7ctctxMDFpx7rKLsnJ3L1WNVZ3NaEtsVIP2mr++Vdkxxa8zPuS5baQqfhjijUE1HBa3PzbKxl4wsSzMvetkNiht1LbEbEy9lxU4J0hDTJabRrK9+0/WTgaPl2o7JdYoxqWQlXFlh5eZSPcQvM39mZuCnHkiFi86VVP2S36hn6xSLc/OsoxkfJuR8vIetgvhRWBbY+JlO3wMu7VFK05RGsocVrWnm9BzMWSAgICBHOOj/8AVrHrev8AoeZ28/8AVHx/dpbq/wB0/D9kR0vUHxbe9RVZuVl2ffbY/KZGDNOG/HENraMEZ6cEy3mPxdkPZWndUjndE9z79WA9fjL1N5ZLWiukc5Z191461m3FPKJ8EW/6hM1lp03GH2LbMi9/i1aoq/8AuafUbDXnMvnc88kf7CNJqyNSvyLVDHCpVqlYbgW2MQLPmArfi+El2y0xSIj3ucEe9f0zFl5+7dtOqp1Wq2sKrZWMtlygbb2K7L3h+YAH9maexWmaTE+5Wzxz1STsAymGHqdf/wCK7qrl9OZqiG/ZUsh22I4odYZ/tVFomKMvNxKGJC5WVj1OV+0EstVWI+OzGX7Tw0mfCEERrbSXYy6MrR9SZN+7ysDIBV/IlSGVtv0WUg7eYbaeRNclPKXvOlk67YNfq1LB0LJp6LkLmWMu+5rsXules/EMSPpKuy45pe0SlzTrESkv/T6m2n5rfpZu30FFf8ZFtv8AnHwdYf8AFXnaPwLdpF72IhfTrnPcWgbirmPSmz0I9wPmB67iWtnzxeNJ6osmOYnWE27NO1JWFOn6owVgFqx80nZX8lS70PuHP7j57Hqa+0bLpranZJjy68pXBKKd5z7YeJ/5Q1I0VNvjYHPQmx8L3b/nX+PUBR+qfWauy4uCms9ZVc19Z0ffTLdFThnLxHzaxqWVtl8vd28y3Vneqjm5dvcCD123sac29Z66Laco5Oo4Ypo0/ZdrXsGs4ljHaq8nDu/UtICn6OKz8gZJtNOLHPlzR4raWemMmlba3rYbrYjIw9VYbH/OZC48l47vp+cjEnnwMtSx8+am3xf6DNuf76fGFL/G6b9u2rC/U6aVO9eJioflZaedv3BVK+xV0pM+P6JM06zEIRrmn2YGS+OxItpWh9/cQ7UpZ+wt+yWMdovXVFMcNlidt/EIyV0vGrO6nHTUbAOo3tXlq+4Cz8QlXY6acVvkmzW5RCR9gej91gZGcw8WZd3dZ/qad13/ABmz8IkW231vFfB3hrpVaUppSAgICBF+PG/MUj1t3+5D/GZm9J/66/H9GpumP+20+X6tRwbjpbkuLESxRSx2dQw35067H6ynu6lbZZi0a8l3ed7VxRwzpz/SU0XTcYEEY9AIIIIqTcH1902ow44/+Y7QwpzZJ62nvKCdt3Dtubp9WTQhstwHexkUEscd1AsKjzIKofkDL+yZIpfSferZa8UKh4B4rfRs0ZIQ202IasipSAXrJBDLv05gR039SOm+8vZ8PrK6e9Xx34JXM/a/oYq5xbkM+2/cDGsFm/6O5HL+9tKH9Jl16LPraqR4z4ks1fPszLF7sELVTUDzd3SpPKu/md2Yn4sZo4scY66K17cUrq7OtAs0nQsh71KZGQl+Zah+1UvdbJWfQhV3I8ixEzs+SL5OXSOSzSvDVS3Z9Xvq+lKf+7xz9zA/7TR2j/XZXpzutXty4U7+hdVoX87iqK8oD3vjb9H+aEn6MfSUdjy6TwT7/wA02WmsaqRa5yiVlia62sdEJ6KzhQ5Hz7tPwzS0jXVV1nTRePY5lDD4dzcsozim/LyGRSAzLXShIG/TfwmZm1RxZdPgtYuVGzbtQ4dzMd68m1hXYhW3HyMS1+ZT71PKrKfoZz/TZYnlDr1lVA6v7N7TkeyCz2Q22ezi37fc7+EH6evX16zTpxcMcXVVtpxcl25vFV+m8J4Ntjt7flYyUYzMfzg5geW47+a17NufPl9ZnRii+eYjoszbhpqqPgvhx9Wz6cKtjWrK9l1u3N3VKjq22/XqVX5sJfzZfV14lelOOVn/APwbT/5O3/Cr/wA5S/rbeCb1EKm4j0l9PzsrCdiWx7WQOPCWT7SP8N1Kn6y9jvF6RbxQWjhs9M8C63/KWl4mWTvY9YS74XoeSz95SfkRMjLTgvNVys6xqoHtW0/2fXM9dtludMhflYgLfvc009mtrjhVyxpZ0+H6LNX1jDrt8TZF9At6dDTUg5h/d1bT2+mPFOn81KzxW5pH254XdayLQuy5OJRZv5F1LVkfRUT7xI9jtrj0dZ456oLkX3ZVlQO72d3jYlKj0RFqrQfRR9TLERFYnuj1m0vV3Dulrg4WLhp1GPTXVv8ApMB4mPxJ3P1mLe3FabLsRpDYzl6QEBAQI7xUuLY1VeRbbWVDMvdqDzc3Trv+rMreOXBE1plmY9/KNWjsE5a62xxE+7m6Oj24GHY1iXXsWTk2esbdSD5D4Sns+27FhtNotM/GPss7TTac9YrasRp5/dtzxLifpP8AgMuRvnZZ989pUvZ+bwjuHiXEHvZx8ShERvnZZ5RM9pPZ+bwjugvEfBvD+c7XJ7RhWud3bFULW7HzNbAqDv6bbyxj9I8FOWsz8pcW3XlnnMR3R0dmWmg9dUyeX09kUH7+b/aTf8m2f+RLj2Rl/kpVwxw1w/pbreouyMhCCl+UA5Rt+hRQAoPx23+MgyekODJy1n5RLuu68tfdHdKtT1jEyce/HNlqC+qykulfiUOpUkb9N+shjfeyROus9pd+zs/h9UC0PgjRsDLxstM3PezHsWxEsSnkZh5HZQZZv6R7Pesx+ko43Xliekd1h3cQYTo1b8zI6lGVqyQykbFSPPpKsb52XxntKT2fm8I7qws7NdD3O2dqKAseVeWk7D3hQSm56f5S5HpNg/kSj9lZPCO6X8PY2mafp1mmLdkWU39+GexFFh71dmA2AHu+Egvv7Zr24tZ7S6jduaI05d0Iv7MtK3/NalmKP6zGSw/eOWWP+T7N/IlHO6Mvh9Xf0Ts/0LHtWzJvyc0qeZabKxVSdvNlHVh8CdvUTm/pLgtHKZj5S9runLE9I7tvxloGm6zkV3ZGbm1Cmvu6qaa6hWg33YgMpO5O2/yHpI8XpDs2OOX5S7tuzLbrEd3Z4I0nSdEN5ouybrMgIC96LzhF38K8oHTduv0nmX0g2fLprM8vKSu7MtekR3Sv8pMX1f8AAZD7a2TxntLr2fn8I7oNxfwxo+r5hy7cnMptNVdbrQlfK3Lvsx5lJ32O30EsYvSLZ8ddIn6S4tuvLaecR3bbgnHwNGpux6crKvrssF3Leib1uVAO3KB7wq/dOMu/tmyTFpme0uq7tzRyjTu1nGXDmkazlrlXZWZTYlKUlaEr2KhnYMeZSd/GfuneL0h2fFXSPylzbdmW084ju+fCHC2kaTmDMqycy+xa3rVbkr5U59t2HKoO+wI+pjL6RbPkrpM8vhJXdeWs8oju7vHGkaVrb47X5GVS+MtqjuETdlcqfFzA/odPmZ5i9INmxa6TPPyl7bduW3KYju0+g8B6Li5uNkJl511lFtdqVWpTyFwfAW2UHbm6/SSz6RYMv9ke/l0lx7MyV56Ry81uCWVdmAgICAgaHiHh/wBtsqcuFFXIyggnxqSQeh+MzNt2HJnycVLRHKa9Neq5s+01xV4ZjXnr1a+7g9rAA1ykK6WDZWHiVgy+fqAfpM+m5MtJ1i8dJjp4/NatvGk9a/XwYyeDTavI9yleZH2CsPErBh7j6gRi3JlxzxVyR4dPHl4l940tGk1+rOTwc1qFHuUqeUkBWHuII8/URj3Hkx24ovHb5eJbeNbRpNfq5Pwk7dDcnvVvsN7wQR5+onNdxZK84yR28fm9neVZ61+rhkcGm0KHtQhXSweFh4lO4Pv9Z1j3JlxzM1yR0mOnj83lt40tGk1+rldwgzjla9dt1borA7ggjz+EU3HlpOsXjt48vEtvKlo0ms9/s5/krZ/Pp+A/xnHsC/447fd17Ur+H6vnZwezMjG5d6yWXwN7yNvWd13JlrExF45+X3czvGszEzXp5s2cIMxQm5CUbnXwN0PKV9fRjFdx5axMRkjny6ffyJ3lSdNa9PMfhB2KE3LujFl8De/lK+voxnldx5KxMReOfLp9/IneVZmJ4enmxdwczlC1yk1tzr4W6NsR69feZ7TcmWkTEZI58un3J3jSdNa9PN9PyVs/nk/Af4zj2Bf8cdvu69p1/D9XH8kn5g3fJuAVHgb3Egnz+AnXsLJw8PrI7fd57Srrrw/VxPB7FxZ3yc6qUB5G+ySCfP4CexuTLFJp6yNJ59Pu89o014uH6snhB+cP3y8wVkHgbbYkE+f9ETyNx5IrNeONOvT7+Z7Srrrw/Vz/ACVs/nk/Af4zn2Bf8cdvu69qV/D9XFeEWBZhcm7kFvA3UgADz9BOp3HkmIickcvL7vI3lWJmeH6uKcHMrvYLl5rOQN4W2PKNh5/Ge23JlmsVm8aRr7vH5vI3jWJmeGefm5DhJwxbvk3YAHwN7hvt5/EzydxZJiI9ZHb7vY3nXXXh+rinB7K7uLl5rOQN4W28IIHn8Z7O48k1is3jl5ePzeRvGsWm3D18xeDiLGsFy87qqMeVvcu+3Tfp7zE7kyzSKesjSNZ6ePzPaNOLi4fq+lHCjJcLe+Ukd3v4W6qjFgPf/SM6x7lyVmut40idenw8/J5beFZif7esadf54pSJ9CyiBmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYgZgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAMBAxAzAQEBAQEBAQEBAQEDEDMD//Z'}}
        />
        <Text style={styles.username}>Username</Text>
        <TextInput
          defaultValue = {this.state.username}
          onChangeText = {text => this.setState({username: text})}
        />

        <Text style={styles.password}>Password</Text>
        <TextInput 
          defaultValue = {this.state.password}
          onChangeText = {text => this.setState({password: text })}
        />
        <Button style={styles.Button} title={"LOGIN"} onPress={this.buttonPressed} />
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor : "white",
    marginBottom: 20
  },
  Image: {
    flex: 1,
    width: 250, 
    height: 50,
    marginBottom: 20
  },
  username:{
    fontStyle: "normal",
    fontSize : 20,
    color : "black",
    backgroundColor:"white",
    paddingHorizontal: 15
  },
  password:{
    fontStyle: "normal",
    fontSize : 20,
    color : "black",
    paddingHorizontal: 15
  },
  Button:{
    color: "red"
  },
  forgotPassword:{
    textAlign: 'right',
    backgroundColor: "transparent"
  }
});

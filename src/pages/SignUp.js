import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Spinner } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import firebase from '../Firebase';

const db = firebase.firestore();

class SignUp extends React.Component {

    state = {
        loading: false, //処理中にボタンにspinner表示する制御用
    }

    _isMounted = false;

    //Submitされたら
    handleOnSubmit = (values) => {
        //spinner表示開始
        if (this._isMounted) this.setState({ loading: true })
        //新規登録処理
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
        .then(userCredential => {
                let flag=false
                //正常終了時
                //ついでに名前を設定（これ、登録と一緒にできないのかなあ）
                firebase.auth().currentUser.updateProfile({
                    displayName: values.username
                }).then(() => {
                    if(flag){//scoreのDB登録とユーザー名の登録が2つとも終わっていたら
                        this.props.history.push("/"); //history.pushを使うためwithRouterしている
                        if (this._isMounted) this.setState({ loading: false });
                    }else{
                        flag=true
                    }
                }).catch((error) => {
                    if (this._isMounted) this.setState({ loading: false });
                    alert(error);
                });
                

                db.collection("scores").doc(userCredential.user.uid).set({
                    username:values.username,
                    score:0,
                })
                .then(() => {
                    if(flag){
                        this.props.history.push("/"); 
                        if (this._isMounted) this.setState({ loading: false });
                    }else{
                        flag=true
                    }
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    alert(error);
                    if (this._isMounted) this.setState({ loading: false });
                    console.error(error);
                });

            })
            .catch(error => {
                //異常終了時
                if (this._isMounted) this.setState({ loading: false });
                alert(error);
            });
        


    }

    componentDidMount = () => {
        this._isMounted = true;
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="container">
                <div className="mx-auto" style={{ width: 400, background: '#eee', padding: 20, marginTop: 60 }}>
                    <p style={{ textAlign: 'center' }}>新規登録</p>
                    <Formik
                        initialValues={{ email: '', password: '' ,username:''}}
                        onSubmit={(values) => this.handleOnSubmit(values)}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email().required(),
                            username: Yup.string().required(),
                            password: Yup.string().required(),

                        })}
                    >
                        {
                            ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            invalid={touched.email && errors.email ? true : false}
                                        />
                                        <FormFeedback>
                                            {errors.email}
                                        </FormFeedback>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input
                                            type="username"
                                            name="username"
                                            id="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            invalid={touched.username && errors.username ? true : false}
                                        />
                                        <FormFeedback>
                                            {errors.username}
                                        </FormFeedback>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            invalid={touched.password && errors.password ? true : false}
                                        />
                                        <FormFeedback>
                                            {errors.password}
                                        </FormFeedback>
                                    </FormGroup>
                                    <div style={{ textAlign: 'center' }}>
                                        <Button color="success" type="submit" disabled={this.state.loading}>
                                            <Spinner size="sm" color="light" style={{ marginRight: 5 }} hidden={!this.state.loading} />
                                            新規登録
                                        </Button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
                <div className="mx-auto" style={{ width: 400, background: '#fff', padding: 20 }}>
                    <Link to="/signin">ログインはこちら。</Link>
                </div>

            </div>
        );
    }
}

export default withRouter(SignUp);
import React, { useCallback, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/iy06">
        iy06
      </Link>{' '}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ rtcClient, setRtcClient}) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  // 変換中か状態管理する
  const [isComposed, setIsComposed] = useState(false);

  // nameが空文字でなければfalse
  useEffect(() => {
    const disabled = name === '';
    setDisabled(disabled);
  }, [name]);

  // 自分の名前を確定する関数, useCallbackを使ってキャッシュする
  const initializeLocalPeer = useCallback((event) => {
    rtcClient.localPeerName = name;
    setRtcClient(rtcClient);
    event.preventDefault();
    // 依存するものを配列で渡す
  }, [name, rtcClient, setRtcClient]);

  // 自分の名前が保持されていれば表示しない
  if (rtcClient.localPeerName !== '') return <></>;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Your Name
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Your Name"
            autoFocus
            name='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            // 変換中か確認するComposition
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
            // TextFieldでEnterが押された場合のeventハンドラ
            onKeyDown={(event) => {
              // 変換中であれば確定しない
              if (isComposed) return;
              // 値がから出れば確定しない
              if (event.target.value === '') return;
              // 上記に当てはまらず、Enterが入力されたら確定
              if (event.key === 'Enter') {
                initializeLocalPeer(event);
              }
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
            onClick={(event) => {
              initializeLocalPeer(event);
            }}
          >
            submit
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

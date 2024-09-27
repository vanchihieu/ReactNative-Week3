import React, { useState } from "react";
import { Alert, Image, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import TextComponent from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";

const FirstScreen = ({ navigation }) => {
  const users = [
    {
      username: "admin",
      password: "admin",
    },
    {
      username: "user",
      password: "user",
    },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeValue = (value) => {
    setUsername(value);
  };

  const handleLogin = () => {
    const result = users.some((user) => {
      return user.username === username && user.password === password;
    });
    if (result) {
      Alert.alert("Login successfull!");
      navigation.navigate('Screen2')
    } else {
      Alert.alert("Login failed");
    }
  };

  return (
    <LinearGradient
      colors={["rgba(251, 203, 0, 1)", "rgba(191, 154, 0, 1)"]}
      style={styles.container}
    >
      <TextComponent
        text={"LOGIN"}
        size={25}
        styles={{ textAlign: "start", marginVertical: 40 }}
      />
      <View>
        <Input
          placeholder={"Name"}
          styleText={{ fontSize: 16 }}
          styles={{
            marginTop: 20,
            backgroundColor: "rgba(196, 196, 196, 0.3)",
            borderColor: "rgba(242, 242, 242, 1)",
            borderWidth: 1,
          }}
          affix={
            <Image
              source={require("../../../assets/avatar_user.png")}
              style={styles.image}
            />
          }
          style={styles.image}
          onChange={(val) => handleChangeValue(val)}
        />
        <Input
          placeholder={"Password"}
          styleText={{ fontSize: 16, marginRight: 190 }}
          styles={{
            marginTop: 30,
            backgroundColor: "rgba(196, 196, 196, 0.3)",
            borderColor: "rgba(242, 242, 242, 1)",
            borderWidth: 1,
          }}
          affix={
            <Image
              source={require("../../../assets/lock.png")}
              style={styles.image}
            />
          }
          isPassword
          onChange={(val) => setPassword(val)}
        />
      </View>

      <Button
        text={"LOGIN"}
        color={"rgba(6, 0, 0, 1)"}
        textColor={"rgba(255, 255, 255, 1)"}
        textSize={18}
        styles={{ marginTop: 40 }}
        onPress={handleLogin}
      />

      <TextComponent
        text={"CREATE ACCOUNT"}
        styles={[styles.font, { marginTop: 40 }]}
        color={"rgba(0, 0, 0, 1)"}
      />
    </LinearGradient>
  );
};

export default FirstScreen;

import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const index = () => {
  const [email, setEmail] = useState("");
  return (
    <View>
      <Image
        source={require("../../assets/images/Logo.png")}
        width={50}
        height={50}
        style={{
          borderRadius: 25,
          marginTop: 50,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        Sign In
      </Text>
      <Text style={{ marginTop: 10, alignSelf: "center", marginBottom: 20 }}>
        Let's experience the joy of coding!
      </Text>
      <Text style={{ marginBottom: 10, width: 350, alignSelf: "center" }}>
        Email address
      </Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={"green"}
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          marginBottom: 10,
          width: 350,
          alignSelf: "center",
          borderRadius: 25,
        }}
      />
      <Text style={{ marginBottom: 10, width: 350, alignSelf: "center" }}>
        Password
      </Text>
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          marginBottom: 10,
          width: 350,
          alignSelf: "center",
          borderRadius: 25,
        }}
      />
      <Pressable
        onPress={() => alert("Button Pressed")}
        style={{
          display: "flex",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#1ae017",
          marginTop: 20,
          borderRadius: 25,
          width: 350,
          alignSelf: "center",
        }}
      >
        {({ pressed }) =>
          pressed ? <Text>Loading...</Text> : <Text>Sign in</Text>
        }
      </Pressable>
      <Pressable
        onPress={() => alert("facebook login")}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Image
          source={{
            uri: "https://scontent.fdel27-6.fna.fbcdn.net/v/t39.8562-6/422083590_1312812522712666_5569536549360094726_n.png?_nc_cat=111&ccb=1-7&_nc_sid=f537c7&_nc_ohc=iGn-J6CN-isQ7kNvwEnXcLm&_nc_oc=Adqn93_mUXSabcSBgmeEEA0lTvLhwVHG4kAahPuT_eiBxnLq61U8JxgOKKTrL8NsU10slIFnbY8uIQhBDLSUrA0W&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=yD0UANL4FBMnDc4ZHnWHmA&_nc_ss=7b289&oh=00_Af4yFl5cqkGIyaIzqOh4KcMZNhCugmTnOHKMgazXcb-2bQ&oe=6A05F7BC",
          }}
          width={60}
          height={60}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            marginTop: 60,
            alignSelf: "center",
          }}
        />
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/1240/1240979.png",
          }}
          width={50}
          height={50}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            marginTop: 60,
            alignSelf: "center",
          }}
        />
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/1362/1362857.png",
          }}
          width={50}
          height={50}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            marginTop: 60,
            alignSelf: "center",
          }}
        />
      </Pressable>
      <Text style={{ marginTop: 20, alignSelf: "center" }}>
        Didn't have an account? <Text style={{ color: "blue" }}>Sign up</Text>
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

import * as React from "react";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import { styles } from "./Sender.styles";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import {
  setIsSender,
  setSelected,
} from "@config/redux/slices/content/mailBoxSlice";
import { IMailFormDataProps } from "@config/models";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Slide, toast } from "react-toastify";
import { items } from "@config/data";

export default function Sender() {
  // ** redux
  const dispatch = useAppDispatch();

  const { selected } = useAppSelector((state) => state.slices.mail);

  const { isRtl } = useAppSelector((state) => state.palette);

  // ** hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMailFormDataProps>();

  // ** useState
  const [editorData, setEditorData] = useState("");

  // ** handle methods
  const handleEditorChange = (_event: any, editor: { getData: () => any }) => {
    const data = editor.getData();
    setEditorData(data);
  };

  // ** submit method
  const onSubmit = (data: IMailFormDataProps) => {
    console.info("Form Data:", data);
    data.ckEditorField = editorData;

    setEditorData("");
    reset();
    alert(JSON.stringify(data, null, 2));
    toast.success("Submitting", {
      position: isRtl ? "top-left" : "top-right",
      rtl: isRtl ? true : false,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
      autoClose: 2000,
    });
  };

  // ** cancel
  const onCancel = () => {
    dispatch(setIsSender(false));
    dispatch(setSelected({ ...selected, id: 0 }));
    setEditorData("");
    reset();
  };

  // ** style
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={style.form}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="To"
              variant="filled"
              fullWidth
              required
              error={!!errors.email}
              helperText={errors.email ? "Email vacibdir" : ""}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              variant="filled"
              fullWidth
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => (
            <TextField {...field} label="Subject" variant="filled" fullWidth />
          )}
        />
        <CKEditor
          key={isRtl ? "ar" : "en"}
          editor={ClassicEditor}
          config={{
            ...ClassicEditor.defaultConfig,
            toolbar: items,
            language: isRtl ? "ar" : "en",
          }}
          i18nIsDynamicList
          data={editorData}
          onReady={(editor) => {
            console.info("CKEditor React Component is ready to use!", editor);
          }}
          onChange={handleEditorChange}
        />
        <Box sx={style.actions}>
          <Button
            type="button"
            variant="contained"
            onClick={onCancel}
            color="error"
          >
            Cancel
          </Button>
          <Button color="success" type="submit" variant="contained">
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

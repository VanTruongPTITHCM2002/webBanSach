import Swal from "sweetalert2";

export const showResponseSuccess = (res:string)=>{
    Swal.fire({
        icon: "success",
        title: `Thành công`,
        text: `${res}`,
      });
}

export const showResponseFailure = (res:string)=>{
  Swal.fire({
    icon: "error",
    title: `Thất bại`,
    text: `${res}`,
  });
}
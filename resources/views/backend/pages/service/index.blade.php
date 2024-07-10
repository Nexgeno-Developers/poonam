@extends('backend.layouts.app') 

@section('page.name', 'Services')

@section('page.content')
<div class="card">
   <div class="card-body">
      <div class="row mb-2">
         <div class="col-sm-5">
            <!--<h3>List</h3>-->
         </div>
         <div class="col-sm-7">
            <div class="text-sm-end">
                <a href="javascript:void(0);" class="btn btn-danger mb-2" onclick="largeModal('{{ url(route('service.add')) }}', 'Add Service')"><i class="mdi mdi-plus-circle me-2"></i> Add Service</a>
            </div>
         </div>
         <!-- end col-->
      </div>
      <div class="table-responsive">
      <table id="basic-datatable" class="table dt-responsive nowrap w-100">
        <thead>
            <tr>
                <th>#</th>
                <th>Page Name</th>
                <th>Title</th>
                <th>URL</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @php $i = 1; @endphp
            @foreach($service as $row)
            <tr>
                <td>{{$i++}}</td>
                <td>{{$row->page_name}}</td>
                <td>{{$row->title}}</td>
                <td>
                    <a target="_blank" href="{{ url(route('service.detail', ['slug' => $row->slug] )) }}">{{$row->slug}}</a>
                </td> 
                <td>{{datetimeFormatter($row->created_at)}}</td>
                <td>
                    <a href="javascript:void(0);" class="action-icon" onclick="largeModal('{{ url(route('service.edit',['id' => $row->id])) }}', 'Edit Service')"> <i class="mdi mdi-square-edit-outline" title="Edit"></i></a>

                    <a href="javascript:void(0);" class="action-icon" onclick="confirmModal('{{ url(route('service.delete', $row->id)) }}', responseHandler)"><i class="mdi mdi-delete" title="Delete"></i></a>
                </td>
            </tr>
            @endforeach
    </table>
      </div>
   </div>
   <!-- end card-body-->
</div>
@endsection

@section("page.scripts")
<script>
    var responseHandler = function(response) {
        location.reload();
    }
</script>
@endsection